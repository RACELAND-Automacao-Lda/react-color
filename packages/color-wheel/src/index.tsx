import React from 'react';
import { HsvaColor, ColorResult, validHex, hexToHsva, hsvaToHex, color as handleColor } from '@uiw/color-convert';
import Interactive, { Interaction } from '@uiw/react-drag-event-interactive';
import { Pointer, PointerProps } from './Pointer';
import { getWheelHandlePosition, getWheelValueFromInput } from './utils';

export interface WheelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  width?: number;
  height?: number;
  radius?: React.CSSProperties['borderRadius'];
  /** Starting angle of the color wheel's hue gradient, measured in degrees. */
  angle?: number;
  /** Direction of the color wheel's hue gradient; either clockwise or anticlockwise. Default: `anticlockwise` */
  direction?: 'clockwise' | 'anticlockwise';
  pointer?: ({ prefixCls, left, top, color }: PointerProps) => JSX.Element;
  onChange?: (color: ColorResult) => void;
}

const HUE_GRADIENT_CLOCKWISE = 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)';
const HUE_GRADIENT_ANTICLOCKWISE = 'conic-gradient(red, magenta, blue, aqua, lime, yellow, red)';

export default React.forwardRef<HTMLDivElement, WheelProps>((props, ref) => {
  const {
    prefixCls = 'w-color-wheel',
    radius = 0,
    pointer,
    className,
    style,
    width = 200,
    height = 200,
    direction = 'anticlockwise',
    angle = 180,
    color,
    onChange,
    ...other
  } = props;
  const hsva = (typeof color === 'string' && validHex(color) ? hexToHsva(color) : color || {}) as HsvaColor;
  const hex = color ? hsvaToHex(hsva) : '';
  const positions = getWheelHandlePosition({ width }, hsva);
  const comProps = {
    top: '0',
    left: '0',
    color: hex,
  };
  const handleChange = (interaction: Interaction, event: MouseEvent | TouchEvent) => {
    const result = getWheelValueFromInput({ width }, width - interaction.x, height - interaction.y);
    const handleHsva = {
      h: result.h,
      s: result.s,
      v: hsva.v,
      a: hsva.a,
    };
    onChange && onChange(handleColor(handleHsva));
  };
  return (
    <Interactive
      className={[prefixCls, className || ''].filter(Boolean).join(' ')}
      {...other}
      style={{
        ...style,
        position: 'relative',
        width,
        height,
      }}
      ref={ref}
      onMove={handleChange}
      onDown={handleChange}
    >
      {React.createElement(pointer || Pointer, {
        prefixCls,
        style: {
          zIndex: 1,
          transform: `translate(${positions.x}px, ${positions.y}px)`,
        },
        ...comProps,
      })}
      <div
        style={{
          position: 'absolute',
          borderRadius: '50%',
          background: direction === 'anticlockwise' ? HUE_GRADIENT_CLOCKWISE : HUE_GRADIENT_ANTICLOCKWISE,
          transform: `rotateZ(${angle + 90}deg)`,
          inset: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          borderRadius: '50%',
          background: 'radial-gradient(circle closest-side, #fff, transparent)',
          inset: 0,
        }}
      />
      <div
        style={{
          backgroundColor: '#000',
          borderRadius: '50%',
          position: 'absolute',
          inset: 0,
          opacity: typeof hsva.v === 'number' ? 1 - hsva.v / 100 : 0,
        }}
      />
    </Interactive>
  );
});

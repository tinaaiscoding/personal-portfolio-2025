import { Dispatch, Ref, SetStateAction } from 'react';

type Props = {
  ref: Ref<HTMLButtonElement>;
  setButtonHovered: Dispatch<SetStateAction<boolean>>;
};

export default function ButtonMask({ ref, setButtonHovered }: Props) {
  return (
    <button
      ref={ref}
      id='button-mask'
      className='u-text-style-large invisible absolute whitespace-nowrap uppercase'
      onMouseEnter={() => setButtonHovered(true)}
      onMouseLeave={() => setButtonHovered(false)}
    >
      Open for work
    </button>
  );
}

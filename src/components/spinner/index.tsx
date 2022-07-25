import {Props} from './interface';

export const Spinner = ({isShown}:Props) => {
  if (!isShown) return null;

  return (
    <div className="spinner">
      <img src="marvel-spinner.png" alt="marvel spinner"/>
    </div>
  )
}

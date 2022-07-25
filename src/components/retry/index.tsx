import { Button } from 'antd';
import { Props } from './interface';

export const Retry = ({ onClick }: Props) => (
  <div className="retry">
    <img src="try-again.png" alt="Crying Dr Strange" />
    <p>Something went wrong :( Please try again...</p>
    <Button onClick={onClick} type="primary">Try again</Button>
  </div>
)

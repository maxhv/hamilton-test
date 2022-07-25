import { Modal as AntdModal } from 'antd';

import Props from './interface';

export const Modal = ({ title, isOpened, children, onClose }: Props) => (
  <>
    <AntdModal
      title={title}
      visible={isOpened}
      footer={false}
      onCancel={onClose}
      width='100%'
    >
      { children }
    </AntdModal>
  </>
);

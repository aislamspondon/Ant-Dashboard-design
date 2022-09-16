import { Modal } from 'antd';

export const DeleteConfirmation = (props) => {
    return (
        <Modal
            title="Are you sure?"
            visible={props.open}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
        >
            <p>{props.message}</p>
        </Modal>
    )
}
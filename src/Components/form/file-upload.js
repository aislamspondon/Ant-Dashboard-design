import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React from 'react';
const { Dragger } = Upload;

export const FileUploader = (props) => {
    const options = {
        name: 'file',
        multiple: true,
        action: 'https://merchport.z1p.xyz/api/upload',

        onChange(info) {
            const { status } = info.file;

            if (status !== 'uploading') {
                props.onUpload(info.file.response.id)
            }

            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        }
    }

    return (
        <Dragger name={props.name} {...options}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                band files
            </p>
        </Dragger>
    )
}

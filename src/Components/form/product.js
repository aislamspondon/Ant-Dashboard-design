import axios from "axios"
import { Select } from 'antd';
import { useCallback, useEffect, useState } from "react"
import { Button, Form, Input, InputNumber } from "antd";
import { FileUploader } from "./file-upload"

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

export const ProductForm = (props) => {
    const { Option } = Select;
    const [categories, setCategories] = useState([])
    const [productImages, setProductImages] = useState([])


    /* Fetch categories */
    const fetchCategories = useCallback(async () => {
        const response = await axios.get("https://merchport.z1p.xyz/api/categories")

        const children = [];
        const data = response.data.result
        const dataLen = response.data.result.length
        for (let i = 0; i < dataLen; i++) {
            children.push(
                <Option
                    key={i}
                    value={data[i].id}
                >{data[i].name}
                </Option>
            );
        }

        setCategories(children)
    }, [])

    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])


    const validateMessages = {
        required: "${label} is required!",
        number: {
            range: "${label} must be between ${min} and ${max}",
        },
    };

    const onFinish = async (data) => {
        const formData = {
            ...data,
            images: productImages
        }
        props.onSubmit(formData);
    }

    return (
        <div>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >

                {/* Product name */}
                <Form.Item
                    name={"name"}
                    label="Product Name"
                    rules={[{ required: true }]}
                >
                    <Input size="large" placeholder="Enter Your Product Name..." />
                </Form.Item>
                <br />

                {/* Product price */}
                <Form.Item
                    name={"price"}
                    label="Product price"
                    rules={[{
                        type: 'number',
                        min: 0,
                        required: true
                    }]}
                >
                    <InputNumber
                        size="large"
                        style={{ width: "100%" }}
                        placeholder="Enter price..."
                    />
                </Form.Item>
                <br />

                {/* Product description */}
                <Form.Item
                    name={"description"}
                    label="Description"
                    rules={[{ required: true }]}
                >
                    <Input.TextArea
                        style={{ width: "100%" }}
                        placeholder="Enter Product Description"
                    />
                </Form.Item>
                <br />

                {/* Product categories */}
                <Form.Item
                    label="Categories"
                    name="categories"
                    rules={[{ required: true }]}
                >
                    <Select
                        size="large"
                        mode="multiple"
                        style={{ width: "100%" }}
                    >
                        {categories}
                    </Select>
                </Form.Item>
                <br />

                {/* Product paymentDetails */}
                <Form.Item
                    name={"paymentDetails"}
                    label="Payment details"
                    rules={[{ required: true }]}
                >
                    <Input size="large" placeholder="Enter payment details..." />
                </Form.Item>
                <br />

                {/* Product shippingDetails */}
                <Form.Item
                    name={"shippingDetails"}
                    label="Shipping details"
                    rules={[{ required: true }]}
                >
                    <Input size="large" placeholder="Enter shipping details..." />
                </Form.Item>


                {/* Products files */}
                <Form.Item
                    label="Product images"
                    name="images"
                >
                    <FileUploader
                        name="images"
                        onUpload={data => setProductImages([...productImages, data])}
                    />
                </Form.Item>
                <br />

                {/* Submit button */}
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={props.loading}
                        style={{ hight: "50px", wight: "20px", float: "left" }}
                    >
                        {props.loading ? "Uploading..." : "Add Product"}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
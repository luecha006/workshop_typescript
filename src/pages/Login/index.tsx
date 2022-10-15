import React, { useEffect, useState } from "react";
import { Button, Form, Card, Container } from "react-bootstrap";
import "./index.css";

const index = (props: any) => {
    const emailTest = "demo@react.ts";
    const passwordTest = "123456";

    const [formTest, setFormTest] = useState<any>({
        email: "",
        password: "",
    });

    const handleClick = () => {
        console.log("formTest ", formTest);
        if (formTest.email === emailTest && formTest.password === passwordTest) {
            props.setSession(true);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "email") {
            setFormTest({
                email: value,
                password: formTest.password,
            });
        } else if (name === "password") {
            setFormTest({
                email: formTest.email,
                password: value,
            });
        }
    };

    useEffect(() => { }, [formTest]);

    return (
        <>
            <Container style={{ width: "50%", textAlign: "center" }} className="mb-3">
                <Card className="my-5 p-4">
                    <Form style={{ width: "70%", textAlign: "center" }}>
                        <Form.Group className="my-2">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                //value={email}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleClick}>
                            Submit
                        </Button>
                    </Form>
                </Card>
            </Container>
        </>
    );
};

export default index;

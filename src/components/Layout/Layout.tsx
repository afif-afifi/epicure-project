import * as React from 'react';
import { Container , Row , Col } from 'react-bootstrap';
export interface ILayoutHeaderProps {
}


export function LayoutHeader (props: ILayoutHeaderProps) {
  return (
    <Container>
        <Row>
            <Col>1 of 1</Col>
            <Col>2 Of 2</Col>
            <Col>3 of 3</Col>
        </Row>
    </Container>
  );
}

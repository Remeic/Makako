import { Button } from '@smooth-ui/core-sc'
import React from "react"; 

const CustomButton = (props) => (
  <Button variant="primary">{props.content}</Button>
)

export default CustomButton;
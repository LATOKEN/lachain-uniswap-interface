import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";

export default function SwitchButton(props) {
  const { setDeploy } = props;

  const changeStyles = (K) => {
    if (K === true) {
      let add_button = document.getElementById("add-button");
      add_button.style.backgroundColor = "#5661FF";

      let remove_button = document.getElementById("remove-button");
      remove_button.style.backgroundColor = "#393A40";
    } else {
      let remove_button = document.getElementById("remove-button");
      remove_button.style.backgroundColor = "#5661FF";

      let add_button = document.getElementById("add-button");
      add_button.style.backgroundColor = "#393A40";
    }
  };

  return (
    <div>
      <ButtonGroup size="large" variant="contained">
        <Button
          id="add-button"
          color="primary"
          text="white"
          onClick={() => {
            setDeploy(true);
            changeStyles(true);
          }}
        >
          Deploy Liquidity
        </Button>

        <Button
          id="remove-button"
          color="secondary"
          text="white"
          onClick={() => {
            setDeploy(false);
            changeStyles(false);
          }}
        >
          Remove Liquidity
        </Button>
      </ButtonGroup>
    </div>
  );
}

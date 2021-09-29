import React from "react";

import Page from "./Page";
import Metamask from "./Metamask";

import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";

import drizzleOptions from "./drizzleOptions";

const drizzle = new Drizzle(drizzleOptions);

const Menu = () => {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;

          if (!initialized || drizzleState.web3.status === 'failed') {
            return (
              <Metamask />
            )
          }

          return (
            <Page drizzle={drizzle} drizzleState={drizzleState} />
          )
        }}
        </DrizzleContext.Consumer>
      </DrizzleContext.Provider>
  )
}

export default Menu;

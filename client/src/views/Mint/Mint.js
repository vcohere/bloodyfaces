import React, { Component } from "react";

import Page from "./Page";

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
              <div className="loading-text">
              <div>Connect Metamask to start the app</div>
              <div>This app works on the Ropsten Testnet</div>
              </div>
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

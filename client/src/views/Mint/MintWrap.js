import React from "react";

import Metamask from "./Metamask";
import MintContent from "./MintContent";

import { Drizzle } from "@drizzle/store";
import { DrizzleContext } from "@drizzle/react-plugin";

import drizzleOptions from "./drizzleOptions";

const drizzle = new Drizzle(drizzleOptions);

const MintWrap = () => {
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
            <MintContent drizzle={drizzle} drizzleState={drizzleState} />
          )
        }}
        </DrizzleContext.Consumer>
      </DrizzleContext.Provider>
  )
}

export default MintWrap;

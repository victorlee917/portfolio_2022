import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import View from "../Routes/View";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<View></View>} />
        <Route path="/mojitto" element={<View></View>} />
        <Route path="/cutify" element={<View></View>} />
        <Route path="/montagegif" element={<View></View>} />
        <Route path="/free" element={<View></View>} />
        <Route path="/oreo" element={<View></View>} />
        <Route path="/cc" element={<View></View>} />
        <Route path="/tides" element={<View></View>} />
        <Route path="/fw" element={<View></View>} />
        <Route path="/hufs" element={<View></View>} />
        <Route path="/fig" element={<View></View>} />
        <Route path="/supernova" element={<View></View>} />
        <Route path="/portfolio" element={<View></View>} />
        <Route path="/*" element="/" />
      </Routes>
    </HashRouter>
  );
};

export default Router;

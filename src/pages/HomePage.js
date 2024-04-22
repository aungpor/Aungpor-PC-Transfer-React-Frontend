import React, { useState, useEffect } from 'react';
import styled from "styled-components";

export default function HomePage() {

  useEffect(() => {
  }, [])

  return (
    <>
    <div>
      Aungpor Pc Transfer
    </div>
    </>
  );
}

const Wrapper = styled.div`
  padding-top: 50px;
  margin: 0 auto;
  display: grid;
`;

const WrapperTwo = styled.div`
  padding-top: 150px;
  margin: 0 auto;
  display: grid;
  justify-items: center;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  top: 0px;
  z-index: -1;
`;
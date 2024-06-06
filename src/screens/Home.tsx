import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { Navigation } from "../types";

type Props = {
  navigation: Navigation;
};

const Home = ({ navigation }: Props) => (
  <Background solid={true}>
    <Logo />
  </Background>
);

export default memo(Home);

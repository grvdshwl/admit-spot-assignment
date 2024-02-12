"use client";
import React from "react";
import {
  NavigationContainer,
  NavigationLink,
  NavigationLogo,
  NavigationPrimaryContainer,
  NavigationSecondaryContainer,
} from "./Navigation.styles";
import { mockNavigationData } from "../../mocks";
import logo from "../../assets/logo.svg";
import { useRouter } from "next/navigation";
const Navigation = () => {
  const router = useRouter();
  return (
    <NavigationContainer>
      <NavigationPrimaryContainer>
        <NavigationLogo
          src={logo}
          alt="logo"
          onClick={() => {
            router.push("/");
          }}
        />
      </NavigationPrimaryContainer>
      <NavigationSecondaryContainer>
        {mockNavigationData.map((item) => (
          <NavigationLink key={item.id} href={item.href}>
            {item.title}
          </NavigationLink>
        ))}
      </NavigationSecondaryContainer>
    </NavigationContainer>
  );
};

export default Navigation;

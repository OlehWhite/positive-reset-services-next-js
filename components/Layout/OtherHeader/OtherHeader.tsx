import { HeaderContainer } from "./styled";
import { LayoutHeader } from "./LayoutHeader/LayoutHeader";
import { LayoutNav } from "./LayoutNav/LayoutNav";

export const OtherHeader = () => {
  return (
    <HeaderContainer>
      <LayoutHeader />
      <LayoutNav />
    </HeaderContainer>
  );
};

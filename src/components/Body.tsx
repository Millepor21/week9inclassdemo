import { Container, Stack } from "react-bootstrap";
import Sidebar from "./Sidebar";

interface BodyProps {
  sidebar: boolean;
  children: JSX.Element[] | JSX.Element;
}

export default function Body({ sidebar, children }: BodyProps) {
  return (
    <Container>
      <Stack direction="horizontal">
        {sidebar && <Sidebar />}
        <div className="child-container">{children}</div>
      </Stack>
    </Container>
  );
}

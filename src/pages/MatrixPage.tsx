import Instructors from "../components/Instructors";
import Students from "../components/Students";
import Users from "../components/Users";
import Whiteboard from "../components/Whiteboard";
import Body from "../components/Body";

export default function MatrixPage() {
  return (
    <Body sidebar>
        <Instructors />
        <Students />
        <Whiteboard />
        <Users />
      </Body>
  )
}

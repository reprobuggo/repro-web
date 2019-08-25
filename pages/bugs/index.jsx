import Link from "next/link";
import MainLayout from "../../components/main-layout.jsx";

const BugLink = (props) => {
  const { id } = props;
  return (
    <li>
      <Link href="/bugs/[id]" as={`/bugs/${id}`}>
        <a>{id}</a>
      </Link>
    </li>
  );
}


const BugsIndex = () => {
  return (
    <MainLayout>
      <ul>
        <BugLink id="abc123"/>
        <BugLink id="def456"/>
        <BugLink id="ghi789"/>
      </ul>
    </MainLayout>
  );
};

export default BugsIndex;

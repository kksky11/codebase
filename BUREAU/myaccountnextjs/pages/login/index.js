import MainLayout      from '@layout/main-layout';
import { LoginPage }   from '@components/views/login';
export default function Login(props) {
  return (
    <MainLayout {...props}>
      <LoginPage {...props} />
    </MainLayout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      pageTitle:"Login Page"
    },
  };
}



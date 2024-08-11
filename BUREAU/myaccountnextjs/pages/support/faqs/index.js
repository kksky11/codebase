//import { FaqsPage } from '@components/views/faqs';
import dynamic from 'next/dynamic';
const FaqsPage     = dynamic(() => import('@views/support/faqs'), {loading: () => '',});
const MainLayout   = dynamic(() => import('@layout/main-layout'), {loading: () => '',});
export default function Faqs(props) {
  return (
    <MainLayout {...props}>
      <FaqsPage {...props} />
    </MainLayout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      pageName:"Faqs",
      leftMenu: true
    },
  };
}

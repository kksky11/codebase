//import { FaqsPage } from '@components/views/faqs';
import dynamic from 'next/dynamic';
const ContactPage     = dynamic(() => import('@views/support/contact-us'), {loading: () => '',});
const MainLayout   = dynamic(() => import('@layout/main-layout'), {loading: () => '',});
export default function ContactUs(props) {
  return (
    <MainLayout {...props}>
      <ContactPage {...props} />
    </MainLayout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      pageName:"Contact Us",
      leftMenu: true
    },
  };
}

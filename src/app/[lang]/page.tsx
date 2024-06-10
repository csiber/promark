import PageClientLayout_Home from "./_components/home";
export const runtime = 'edge';
export default async function Home({ params }: { params: { lang: string } }) {
  // const lang = params.lang;
  return <PageClientLayout_Home />;
}

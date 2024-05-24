import MainButton from "./components/buttons/MainButton";

export default function Home() {
  return (
    <main className="p-10 w-2/3 h-screen h-[300px] bg-surface-100">
      <h1 className="mb-3 text-primary-200 heading-xl-bold">Cupidatat</h1>
      <h3 className="mb-10 text-secondary-200 heading-md-bold">
        Est esse eiusmod consequat voluptate occaecat incididunt aliqua veniam
        culpa Lorem aliquip elit proident nulla.
      </h3>
      <p className="mb-10">
        In eu dolore non enim id ipsum elit culpa nulla amet tempor consectetur
        aliquip. Excepteur pariatur proident id mollit. In do culpa tempor duis
        cupidatat eu fugiat labore magna amet elit. Sint pariatur occaecat
        commodo esse veniam occaecat ut duis fugiat et. Voluptate consectetur
        culpa aute veniam ad cupidatat mollit cillum aliquip. Excepteur qui quis
        fugiat excepteur nostrud cillum. Fugiat aliqua ullamco qui do ullamco
        labore ut fugiat.
      </p>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center gap-x-4">
          <MainButton text="Button" type="primary" size="md" />
          <MainButton text="Button" type="light-secondary" size="md" />
        </div>
        <div className="flex items-center gap-x-4">
          <MainButton text="Button" type="primary" size="lg" />
          <MainButton text="Button" type="light-secondary" size="lg" />
        </div>
      </div>
    </main>
  );
}

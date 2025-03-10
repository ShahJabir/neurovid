import React from 'react';

import LandingPageNavbar from './_components/navbar';

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="felx felx-col container px-10 py-10 xl:px-0">
      <LandingPageNavbar />
      {children}
    </div>
  );
};

export default layout;

/* @flow */

import React from 'react';

type Props = {
  children: string,
};

export const HtmlEntity = ({children}: Props) => (
  <span dangerouslySetInnerHTML={{ __html: children }} />
);

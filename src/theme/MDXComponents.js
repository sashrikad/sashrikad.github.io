import MDXComponents from '@theme-original/MDXComponents';
import Columns from '@site/src/components/Columns';
import Column from '@site/src/components/Column';
import React from 'react';
import Card from '@site/src/components/Card';
import CardBody from '@site/src/components/Card/CardBody';
import CardFooter from '@site/src/components/Card/CardFooter';
import CardHeader from '@site/src/components/Card/CardHeader';
import CardImage from '@site/src/components/Card/CardImage';
export default {
    // Reusing the default mapping
    ...MDXComponents,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardImage,
    Columns,
    Column,
};

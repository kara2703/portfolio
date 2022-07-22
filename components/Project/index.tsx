import Card from '@components/Card';
import { FiGithub } from 'react-icons/fi';
import IconButton from '@components/IconButton';
import Img from 'next/image';
import NextLink from 'next/link';
import { ProjectData } from '@lib/projects';

export type ProjectProps = React.ComponentProps<typeof Card> & ProjectData;

const Project: React.FC<ProjectProps> = ({
  title,
  dates,
  description,
  image,
  imageAlt,
  github,
  ...props
}) => {
  return (
    <Card {...props}>
      <div className="overflow-hidden rounded-lg">
        <Img layout="responsive" {...image} alt={imageAlt} className="bg-white" />
      </div>

      <div className="mt-3">
        <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
        <p className="text-md my-2 border-b border-black border-opacity-20 pb-1 dark:border-white">
          {dates}
        </p>
        <p>{description}</p>
      </div>

      <div className="flex-grow" />

      <div className="mt-2 flex">
        <NextLink href={github} passHref>
          <IconButton
            as="a"
            overrideClassName
            className="m-auto inline-block rounded-lg bg-gray-200 p-3 text-black transition-colors ease-in-out hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
            icon={<FiGithub />}
            aria-label="Github Project"
            //  @ts-ignore
            target="_blank"
            rel="noopener noreferrer"
          />
        </NextLink>
      </div>
    </Card>
  );
};

export default Project;

import Link from 'next/link';

import type { IProjectsEntity } from '@/graphql/models/resume';
import usePageTranslation from '@/hooks/usePageTranslation';

import { ICRocket } from '../icons/resume';
import { ResumeField } from './hoc/hoc_field';

interface IResumeProject {
  e: IProjectsEntity;
}
function ResumeProject({ e }: IResumeProject) {
  return (
    <section className="mb-4 flex flex-col">
      <div className=" flex items-center max-sm:flex-col max-sm:items-start">
        <h6 className="flex-1 text-lg font-semibold text-gray-700 dark:text-white lg:leading-5">
          {e.title}
        </h6>
        <Link
          href={e.project_url}
          className="rounded bg-accent px-4 py-1.5 text-xs font-light tracking-widest text-primary dark:bg-accent-dark dark:text-white lg:leading-3"
        >
          {e.project_url.replaceAll('https://', '')}
        </Link>
      </div>
      <p className="mt-2 text-sm text-gray-700 dark:text-white lg:my-4">
        {e.short_description}
      </p>
    </section>
  );
}
interface IProps {
  projects?: IProjectsEntity[];
}

export function ResumeProjects({ projects }: IProps) {
  const { t } = usePageTranslation('resume', 'Title');
  if (projects === undefined) return <></>;
  return (
    <ResumeField icon={ICRocket} title={t('projects')} showMargin={true}>
      {projects.map((e) => (
        <ResumeProject key={e.id} e={e!} />
      ))}
    </ResumeField>
  );
}

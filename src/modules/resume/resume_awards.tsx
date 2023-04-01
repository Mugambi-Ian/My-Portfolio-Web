import type { FC } from 'react';
import { Fragment } from 'react';

import type { IAwardsEntity } from '@/graphql/models/resume';

import { ICAward } from '../icons/resume';
import { ResumeField } from './hoc/hoc_field';

interface IResumeAward {
  e: IAwardsEntity;
}
const ResumeAward: FC<IResumeAward> = ({ e }) => {
  const parseDate = (date: string) => {
    return new Date(date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
    });
  };

  return (
    <Fragment>
      <div className="mb-2 flex w-full lg:mb-1 lg:leading-7">
        <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
          {e.title}
        </h6>
        <span className="flex-1" />
        <p className="whitespace-nowrap text-xs text-gray-500 dark:text-white">
          {parseDate(e.date!)}
        </p>
      </div>
      <div className="flex w-full leading-4">
        <h6 className="text-base font-normal leading-3 text-gray-500 dark:text-white">
          {e.award}
        </h6>
      </div>
      <p className="mb-4 mt-2 text-sm text-gray-700 dark:text-white lg:my-4">
        {e.description}
      </p>
    </Fragment>
  );
};
interface IProps {
  awards?: IAwardsEntity[];
}

export function ResumeAwards({ awards }: IProps) {
  if (awards === undefined) return <></>;
  return (
    <ResumeField icon={ICAward} title="Awards" showMargin={true}>
      {awards.map((e) => (
        <ResumeAward key={e.id} e={e!} />
      ))}
    </ResumeField>
  );
}

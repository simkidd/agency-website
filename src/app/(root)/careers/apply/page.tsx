import JobApplication from "@/components/pages/career/JobApplication";
import React from "react";

const ApplyPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { job } = await searchParams;

  return (
    <div>
      <JobApplication jobId={job as string} />
    </div>
  );
};

export default ApplyPage;

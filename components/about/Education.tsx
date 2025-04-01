import { EducationField } from "@/props";

const Education = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-20">
      <h2 className="text-2xl font-bold text-secondary mb-3 text-left w-full">Education</h2>

      <div className="flex flex-wrap gap-7">
        <EducationField
          institute="Lovely Professional University, Jalandhar"
          degree="B.Tech. Computer Science"
          startDate="AUG 2022"
          endDate="AUG 2026"
          percentage="7.2 cgpa"
        />

        <EducationField
          institute="Kendriya Vidyalaya,Ajmer"
          degree="Class 12"
          startDate="APR 2021"
          endDate="MAR 2022"
          percentage="93.6%"
        />

        <EducationField
          institute="Kendriya Vidyalaya,Ajmer"
          degree="Class 10"
          startDate="APR 2019"
          endDate="MAR 2020"
          percentage="88.4%"
        />
      </div>
    </section>
  );
};

export default Education;

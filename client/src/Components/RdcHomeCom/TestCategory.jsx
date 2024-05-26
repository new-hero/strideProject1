import { GiBoneMace, GiBrain, GiTestTubes } from "react-icons/gi";
import { CiWavePulse1 } from "react-icons/ci";

const TestCategory = () => {
  return (
    <div className="my-3">
      <div>
        <h2 className="text-3xl font-bold text-center">Test Category</h2>
        <hr className="border border-green-600 my-3" />
      </div>
      <div>
        <TestCategory
          icon={<GiTestTubes />}
          category={"Pathology"}
        ></TestCategory>
        <TestCategory icon={<GiBrain />} category={" CT scan"}></TestCategory>
        <TestCategory icon={<GiBoneMace />} category={"X- Ray"}></TestCategory>
        <TestCategory icon={<GiBoneMace />} category={"X- Ray"}></TestCategory>
        <TestCategory
          icon={<CiWavePulse1 />}
          category={"ECG"}
        ></TestCategory>
      </div>
    </div>
  );
};

export default TestCategory;

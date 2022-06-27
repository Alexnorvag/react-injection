import clsx from "clsx";

import { RoundedCheckIcon } from "./common/icon/rounded-check";

const planPrivileges = {
  starter: ["2 team members", "20GB Cloud storage", "Integration help"],
  basic: ["Sketch Files", "API Access"],
  pro: ["Complete documentation", "24×7 phone & email support"],
};

const plans = Object.keys(planPrivileges);

export const Card = ({ header, price, plan }) => {
  const currentPlanIdx = plans.findIndex((planItem) => planItem === plan);

  return (
    <div className="p-4 max-w-sm rounded-lg border shadow-md sm:p-8 bg-slate-800 border-slate-700">
      <h5 className="mb-4 text-xl font-medium text-gray-400">{header}</h5>

      <div className="flex items-baseline text-white">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="ml-1 text-xl font-normal text-gray-400">/month</span>
      </div>

      <ul className="my-7 space-y-5">
        {Object.values(planPrivileges).map((privileges, planIdx) =>
          privileges.map((privilege, idx) => (
            <li
              key={idx}
              className={clsx("flex space-x-3", {
                "line-through decoration-gray-500": planIdx > currentPlanIdx,
              })}
            >
              <RoundedCheckIcon
                color={
                  planIdx > currentPlanIdx ? "text-gray-500" : "text-orange-600"
                }
              />

              <span
                className={clsx(
                  "text-base font-normal leading-tight ",
                  `${
                    planIdx > currentPlanIdx ? "text-gray-500" : "text-gray-400"
                  }`
                )}
              >
                {privilege}
              </span>
            </li>
          ))
        )}
      </ul>

      <button
        type="button"
        className="text-white bg-orange-600 hover:bg-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center transition duration-150 ease-in-out"
      >
        Choose plan
      </button>
    </div>
  );
};

import React from "react"

interface IWorkingHours {
    hours: { day: string; hours: string }[];
}

const WorkingHours: React.FC<IWorkingHours> = ({ hours }) => {
    return (
        <div className="rounded-lg border border-[#2563EB] p-6">
            {hours.map((hour) => (
                <div key={hour.day} className="flex justify-between items-center gap-4 text-lg">
                    <div className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="#2563EB"
                            viewBox="0 0 16 16"
                            width={20}
                            height={20}
                        >
                            <path
                                fill="#2563EB"
                                fillRule="evenodd"
                                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM7 3v5.414l3.293 3.293 1.414-1.414L9 7.586V3z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        {hour.day}
                    </div>
                    <div className="text-blue-600">{hour.hours}</div>
                </div>
            ))}
        </div>
    )
}

export default WorkingHours
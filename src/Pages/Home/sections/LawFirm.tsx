import { BiCheck } from "react-icons/bi"
import legalBlog from "../../../assets/legalBlog1.png"
import { ComponentHeaderTwo } from "../../../components/ComponentHeader"
import { LineChart } from "@mui/x-charts/LineChart"
import Lawyers from "./Lawyers"
import { Button } from "../../../components/button"
import { lawyerFeatures } from "../../../data/data"

const LawFirm = () => {
  return (
    <>
      <div className="container-style py-20">
        <ComponentHeaderTwo title="Specialized lawyers around the clock" label="LawFirm" />
      </div>

      <Lawyers />

      <div className="relative min-h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${legalBlog || "photo.svg"})` }}
          role="img"
          aria-label="Background image"
        />

        <div className="absolute inset-0 bg-primary-color opacity-95" />

        {/* Content */}
        <div className="relative z-10 container-style text-white py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Graph Visualization */}
            <div className="w-full overflow-x-auto">
              <div className="min-w-[300px] text-white">
                <LineChart
                   xAxis={[
                    {
                      data: [1, 2, 3, 5, 8, 10],
                      tickLabelStyle: {
                        fill: "white",
                      },
                    },
                  ]}
                  yAxis={[
                    {
                      tickLabelStyle: {
                        fill: "white",
                      },
                    },
                  ]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                  ]}
				  
				  sx={{
                    ".MuiLineElement-root": {
                      strokeWidth: 2,
                    },
                    ".MuiChartsAxis-line": {
                      stroke: "white",
                    },
                    ".MuiChartsAxis-tick": {
                      stroke: "white",
                    },
                  }}
                  width={500}
                  height={300}
                />
              </div>
            </div>

            <div className="text-white space-y-6">
              <div>
                <span className="text-secondary-color font-medium">Join As A Lawyer</span>
                <h2 className="text-2xl md:text-4xl font-bold mt-2">Join as a Lawyer</h2>
              </div>

              <p className="text-text-color text-sm md:text-base">
                are you a licensed lawyer looking to expand your legal services? join naseh, qatar's first legal
                platform, and start providing legal consultations to clients across the country with ease and
                convenience.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {lawyerFeatures.map(({ title }, index) => (
                  <div key={index} className="flex items-center gap-3 bg-primary-color p-3 md:p-4 rounded-xl">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                        <BiCheck className="w-4 h-4 text-green-500" />
                      </div>
                    </div>
                    <span className="text-xs md:text-sm font-medium">{title}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-secondary-color hover:bg-secondary-color/90 text-white font-medium w-full sm:w-auto min-w-[200px]">
                <span className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center text-sm">
                  +
                </span>
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LawFirm


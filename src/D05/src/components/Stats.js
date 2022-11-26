import { useState, useEffect } from "react";
import { Typography, Divider, Row, Col, Spin } from "antd";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { getStats } from "../api/api";

const { Title } = Typography;
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Stats = () => {
  const [statsData, setStatsData] = useState(null);

  useEffect(() => {
    getStats().then((data) => {
      setStatsData(data);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <Title>Stats page</Title>
      <Divider />
      {statsData ? (
        <>
          <Row className="row" gutter={[24, 24]}>
            <Col sm={{ span: 24 }} lg={{ span: 500 }}>
              <div className="chart-container">
                <Title level={4}>Average price per neighborhood</Title>
                <div>
                  This diagram shows the average price of the listings in each of the top 20 neighborhoods. <br/><br/><br/>
                </div>
                <div className="chart-inner">
                  <ResponsiveContainer>
                    <BarChart
                      data={statsData.barplot_data_avg_price}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="area" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="price" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>

            </Row>
            <Row>
             <Col sm={{ span: 24 }} lg={{ span: 500 }}>
              <div className="chart-container">
                <Title level={4}>Bathroom Type</Title>
                <div>
                  This pie diagram shows how many listings there are for each type of bathroom. <br/><br/><br/>
                </div>
                <div className="chart-inner">
                  <ResponsiveContainer>
                    <PieChart>
                    <Tooltip />

                      <Pie
                      
                        data={statsData.pie_chart}
                        dataKey="count_of_listings"
                        outerRadius={100}
                        label
                      >
                        {statsData.pie_chart.map((entry, index) => (
                          
                          <Cell
                          
                            key={entry.bathroom_type}
                            fill={COLORS[index % COLORS.length]}
                          />
                          
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
            </Row>


            <Row className="row" gutter={[24, 24]}>
            <Col sm={{ span: 24 }} lg={{ span: 500 }}>
              <div className="chart-container">
                <Title level={4}>Number of amenities in each listing</Title>
                <div>
                  This diagram shows how many listings there are, in correlation to the top 20 amenities extracted from the dataset. <br/><br/><br/>
                </div>
                <div className="chart-inner">
                  <ResponsiveContainer>
                    <BarChart
                      data={statsData.bar2}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="number_of_amenities" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count_of_listings" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
            </Row>
            <Row>
            <Col sm={{ span: 24 }} lg={{ span: 500 }}>
              <div className="chart-container">
                <Title level={4}>Number of bedrooms</Title>
                <div>
                  This diagram shows how many listings there are in correlation to the number of bedrooms each listing has. <br/><br/><br/>
                </div>
                <div className="chart-inner">
                  <ResponsiveContainer>
                    <BarChart
                      data={statsData.bar3}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="number_of_bedrooms" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count_of_listings" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <div className="stats-loader">
          <Spin size="large" />
        </div>
      )}
    </div>
  );
};

export default Stats;

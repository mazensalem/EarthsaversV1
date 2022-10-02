import { View, Text, Modal, ScrollView, TextInput } from "react-native";
import React from "react";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryZoomContainer,
} from "victory-native";

export default function Objpop({ objtitle, objshow, setobjshow }) {
  return (
    <Modal
      animationType="slide"
      visible={objshow}
      transparent={true}
      onRequestClose={() => {
        setobjshow(false);
      }}
    >
      <View
        style={{ marginTop: "40%" }}
        className="bg-gray-500 h-1/2 mx-auto w-11/12 items-center rounded-lg pt-4"
      >
        <Text className="text-3xl">{objtitle}</Text>

        <ScrollView className="px-5 mt-3" style={{ maxHeight: "85%" }}>
          {objtitle == "Agriculture" ? (
            <>
              <ScrollView horizontal>
                <VictoryChart
                  // domainPadding will add space to each side of VictoryBar to
                  // prevent it from overlapping the axis
                  domainPadding={20}
                >
                  <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={[
                      "Quarter 1",
                      "Quarter 2",
                      "Quarter 3",
                      "Quarter 4",
                    ]}
                  />
                  <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={(x) => `$${x / 1000}k`}
                  />
                  <VictoryBar
                    data={[
                      { quarter: 1, earnings: 13000 },
                      { quarter: 2, earnings: 16500 },
                      { quarter: 3, earnings: 14250 },
                      { quarter: 4, earnings: 19000 },
                    ]}
                    x="quarter"
                    y="earnings"
                  />
                </VictoryChart>
              </ScrollView>
              <View>
                <Text className="text-lg">Beginers</Text>
                <Text className="mt-2">
                  • Identify which satellites and sensors can be used for
                  agricultural applications
                </Text>
                <Text className="mt-2">
                  • Understand the limitations of remote sensing and modeled
                  data for agriculture and food security
                </Text>
                <Text className="mt-2">
                  • Acquire specific remote sensing data products that are
                  appropriate for their work
                </Text>
                <Text className="mt-2">
                  • Apply remote sensing techniques to crop monitoring, drought,
                  and humanitarian relief
                </Text>
              </View>
              <View>
                <Text className="text-lg">Intermediate</Text>
                <Text className="mt-2">
                  • Identify state-of-the-art techniques to derive
                  evapotranspiration (ET) using remote sensing
                </Text>
                <Text className="mt-2">
                  • Recognize how ET data can be used in water resources and
                  agricultural management
                </Text>
                <Text className="mt-2">
                  • Access OpenET and ECOSTRESS ET data products for their own
                  applications
                </Text>
              </View>
              <View>
                <Text className="text-lg">Advanced</Text>
                <Text className="mt-2">
                  • The information content in passive (optical) and active
                  (microwave) remote sensing data and how it relates to
                  agricultural parameters
                </Text>
                <Text className="mt-2">
                  • The characteristics of passive and/or active sensors used in
                  operational crop mapping and biophysical retrievals
                </Text>
                <Text className="mt-2">
                  • Where to acquire satellite data for conducting agricultural
                  analysis
                </Text>
                <Text className="mt-2">
                  • The steps for pre-processing optical and radar imagery
                </Text>
                <Text className="mt-2">
                  • The steps to classify crop types using supervised and
                  unsupervised techniques and explain the difference among
                  classifiers (e.g., Decision Tree and Random Forest)
                </Text>
                <Text className="mt-2">
                  • Best practices for collecting field-based training data
                </Text>
                <Text className="mt-2">
                  • Retrieval of crop biophysical variables
                </Text>
                <Text className="mt-2">
                  • Explain the theory behind SAR Polarimetry, especially as
                  related to crop characteristics
                </Text>
                <Text className="mt-2">
                  • Generate polarimetric parameters using open source
                  imagery/software and perform a time series analysis of crop
                  growth
                </Text>
                <Text className="mt-2">
                  • Explain the theory behind SAR Polarimetry, especially as
                  related to crop characteristics
                </Text>
                <Text className="mt-2">
                  • Identify how Sen4Stat can support National Statistical
                  Offices in the uptake of satellite Earth observations for
                  agricultural statistics
                </Text>
                <Text className="mt-2">
                  • Perform a time series analysis of crop types using
                  Sentinel-2 derived LAI index
                </Text>
              </View>
            </>
          ) : objtitle == "Climate" ? (
            <View>
              <Text className="text-xl mt-2">The target of the training</Text>
              <View>
                <Text className="text-lg">Beginers</Text>
                <Text className="mt-2">
                  • Understand the differing needs of mitigatio n, adaptation,
                  and risk management applications
                </Text>
                <Text className="mt-2">
                  • Recognize the main components and distinguishing factors of
                  climate projection sets
                </Text>
                <Text className="mt-2">
                  • Summarize the benefits and tradeoffs of different climate
                  projection sets and versions
                </Text>
                <Text className="mt-2">
                  • Discuss selection of the best climate projection set for
                  various application needs
                </Text>
                <Text className="mt-2">
                  • Understand the characteristics and limitati ons of XCO2
                  measurements from space
                </Text>
                <Text className="mt-2">
                  • Understand the type of climate studies that these
                  measurements can support
                </Text>
                <Text className="mt-2">
                  • Be able to open and visualize XCO2 data from OCO 2
                </Text>
                <Text className="mt-2">
                  • Recognize the need to monitor CO2, CH4, and other greenhouse
                  gases to support efforts to reduce net e missions and mitigate
                  their impact on climate
                </Text>
                <Text className="mt-2">
                  • Describe how top down CO2 and CH4 budgets can be derived
                  using atmospheric measurements and inverse models
                </Text>
                <Text className="mt-2">
                  • Relate how the products and methods described can be
                  combined with bottom up inventories to identify op portunities
                  for improving GHG inventories to support future GSTs
                </Text>
              </View>
              <View>
                <Text className="text-lg">Intermediate</Text>
                <Text className="mt-2">
                  • Understand the value and us efulness of Earth observations
                  to monitor and report on urban Sustainable Development Goal
                  (SDG) indicators and the New Urban Agenda.
                </Text>
                <Text className="mt-2">
                  • Learn from inspiring examples of cities using Earth
                  observations for SDG 11 (sustainable cities and human
                  settlements) and the New Urban Agenda.
                </Text>
                <Text className="mt-2">
                  • Understand how to apply Earth observation based Toolkit
                  resources to enhance urban resilience and improve decisions
                </Text>
                <Text className="mt-2">
                  • Explain the difference between weather and climate
                </Text>
                <Text className="mt-2">
                  • Recognize the main components relevant to climate ch ange
                  decision making
                </Text>
                <Text className="mt-2">
                  • Identify how Earth observations are used in climate change
                  assessment
                </Text>
                <Text className="mt-2">
                  • Summarize different types of climate information across time
                  scales
                </Text>
                <Text className="mt-2">
                  • Discuss how models can be used for climate change adaptation
                  planning
                </Text>
                <Text className="mt-2">
                  • Recognize the applications of passive and active remote
                  sensing for flooding, landslides, and sea level rise
                </Text>
                <Text className="mt-2">
                  • Perform an analysis pre and post storm event for a region of
                  interest
                </Text>
                <Text className="mt-2">
                  • Assess the landslide hazard for a region of interest prior
                  to and during an event
                </Text>
                <Text className="mt-2">
                  • Interpret satellite derived products for characterizing sea
                  level rise on a regional scale
                </Text>
              </View>
              <View>
                <Text className="text-lg">Advanced</Text>
                <Text className="mt-2">
                  • Be able to summarize priorities and challenges in the energy
                  management sector and how Earth observations can support
                  decision-making
                </Text>
                <Text className="mt-2">
                  • Become familiar with online tools for acquiring data from
                  satellite missions and visualizing data or conducting analyses
                </Text>
                <Text className="mt-2">
                  • Be aware of various use cases for Earth Observations in
                  energy management for renewable energy, energy efficiency, and
                  climate resilience
                </Text>
                <Text className="mt-2">
                  • Terminology regarding type and components of fire (pre,
                  during, post)
                </Text>
                <Text className="mt-2">
                  • Climatic and biophysical conditions pre-, during-, and
                  post-fire
                </Text>
                <Text className="mt-2">
                  • The satellites and instruments used in conducting fire
                  science
                </Text>
                <Text className="mt-2">
                  • The applications of passive and active remote sensing for
                  fires
                </Text>
                <Text className="mt-2">
                  • How to visualize fire emissions and particulate matter
                </Text>
                <Text className="mt-2">
                  • The use of tools for active fires, emissions, and burned
                  areas
                </Text>
                <Text className="mt-2">
                  • How to acquire data for conducting analysis in a given study
                  area
                </Text>
                <Text className="mt-2">
                  • Derive regional precipitation statistics (mean, standard
                  deviation, anomalies, percentile values)
                </Text>
                <Text className="mt-2">
                  • Calculate and interpret the Standardized Precipitation Index
                  (SPI) for assessing extreme dry and wet periods
                </Text>
              </View>
            </View>
          ) : objtitle == "Air Quality" ? (
            <View>
              <Text className="text-xl mt-2">The target of the training</Text>
              <View>
                <Text className="text-lg">Beginers</Text>
                <Text className="mt-2">
                  • List the pollutants that can be observed by NASA satellites
                </Text>
                <Text className="mt-2">
                  • Find and download imagery for NO2 and aerosols/particles
                </Text>
                <Text className="mt-2">
                  • Describe the capabilities and limitations of NASA NO2 and
                  aerosol measurements
                </Text>
              </View>
              <View>
                <Text className="text-lg">Intermediate</Text>
                <Text className="mt-2">
                  • Terminology regarding type and components of fire (pre,
                  during, post)
                </Text>
                <Text className="mt-2">
                  • Climatic and biophysical conditions pre-, during-, and
                  post-fire
                </Text>
                <Text className="mt-2">
                  • The satellites and instruments used in conducting fire
                  science
                </Text>
                <Text className="mt-2">
                  • The applications of passive and active remote sensing for
                  fires
                </Text>
                <Text className="mt-2">
                  • How to visualize fire emissions and particulate matter
                </Text>
                <Text className="mt-2">
                  • The use of tools for active fires, emissions, and burned
                  areas
                </Text>
                <Text className="mt-2">
                  • How to acquire data for conducting analysis in a given study
                  area
                </Text>
              </View>
              <View>
                <Text className="text-lg">Advanced</Text>
                <Text className="mt-2">
                  • Understand the available data products
                </Text>
                <Text className="mt-2">• Access and download TROPOMI data</Text>
                <Text className="mt-2">
                  • Analyze the data using Python tools
                </Text>
                <Text className="mt-2">
                  • Science and basics of AQ forecasting
                </Text>
                <Text className="mt-2">
                  • Air quality forecasting using local, regional, and global
                  models
                </Text>
                <Text className="mt-2">
                  • Model components such as emissions, boundary conditions,
                  initialization, and data assimilation
                </Text>
                <Text className="mt-2">
                  • Hands-on exercise developing a simple forecasting model
                </Text>
                <Text className="mt-2">
                  • Download, map, and subset GEOS outputs using tools developed
                  by the Goddard Earth Sciences Data and Information Services
                  Center (GES DISC)
                </Text>
                <Text className="mt-2">
                  • Perform intercomparison and evaluation of analysis and
                  forecast output using Jupyter notebooks
                </Text>
                <Text className="mt-2">
                  • Perform air quality assessment using reanalysis and
                  forecasts from GEOS, ground and satellite measurements
                </Text>
              </View>
            </View>
          ) : objtitle == "Land" ? (
            <View>
              <Text className="text-xl mt-2">The target of the training</Text>
              <View>
                <Text className="text-lg">Beginers</Text>
                <Text className="mt-2">
                  ▪ Summarize primary concepts of ecosystem services and natural
                  capital accounting
                </Text>
                <Text className="mt-2">
                  ▪ Recall global frameworks and initiatives for ecosystem
                  assessments
                </Text>
                <Text className="mt-2">
                  ▪ Outline the role of NASA Earth Observations (EO) in
                  conducting ecosystem assessments
                </Text>
                <Text className="mt-2">
                  ▪ Identify natural capital accounting models that incorporate
                  EO
                </Text>
                <Text className="mt-2">
                  ▪ Discover case study examples of the use of EO for ecosystem
                  assessments
                </Text>
                <Text className="mt-2">
                  ▪ Distinguish some types of submerged and floating aquatic
                  flora
                </Text>
                <Text className="mt-2">
                  ▪ Summarize the major features of AV spectral signatures
                </Text>
                <Text className="mt-2">
                  ▪ Recognize the primary satellite sensors used for studying AV
                </Text>
                <Text className="mt-2">
                  ▪ Become familiarized with a citizen science (Floating
                  Forests) tool for classifying kelp forests in the west coast
                  of the United States
                </Text>
                <Text className="mt-2">
                  ▪ Discover remotely-sensed and in situ tools to study the
                  presence of seaweed in the Atlantic/Caribbean including the
                  Sargassum Watch System (SaWS)
                </Text>
                <Text className="mt-2">
                  ▪ Identify characteristics of hyperspectral data including
                  benefits and limitations for land and coastal systems
                </Text>
                <Text className="mt-2">
                  ▪ Recall various satellite and airborne-based hyperspectral
                  imagers
                </Text>
                <Text className="mt-2">
                  ▪ Recall various satellite and airborne-based hyperspectral
                  imagers
                </Text>
                <Text className="mt-2">
                  ▪ Relate past hyperspectral campaigns to future missions
                </Text>
                <Text className="mt-2">
                  ▪ Illustrate uses of hyperspectral data for land assessments
                  such as invasive species management, agricultural management,
                  wildfire impacts, forest decline and pest infestation, and
                  more
                </Text>
                <Text className="mt-2">
                  ▪ Illustrate uses of hyperspectral data for coastal and ocean
                  applications such as coral reef assessments, mapping submerged
                  aquatic vegetation, and identifying marine debris
                </Text>
              </View>

              <View>
                <Text className="text-lg">Intermediate</Text>
                <Text className="mt-2">
                  • Terminology regarding type and components of fire (pre,
                  during, post)
                </Text>
                <Text className="mt-2">
                  • Climatic and biophysical conditions pre-, during-, and
                  post-fire
                </Text>
                <Text className="mt-2">
                  • The satellites and instruments used in conducting fire
                  science
                </Text>
                <Text className="mt-2">
                  • The applications of passive and active remote sensing for
                  fires
                </Text>
                <Text className="mt-2">
                  • How to visualize fire emissions and particulate matter
                </Text>
                <Text className="mt-2">
                  • The use of tools for active fires, emissions, and burned
                  areas
                </Text>
                <Text className="mt-2">
                  • How to acquire data for conducting analysis in a given study
                  area
                </Text>
              </View>
              <View>
                <Text className="text-lg">Advanced</Text>
                <Text className="mt-2">
                  • Understand the available data products
                </Text>
                <Text className="mt-2">• Access and download TROPOMI data</Text>
                <Text className="mt-2">
                  • Analyze the data using Python tools
                </Text>
                <Text className="mt-2">
                  • Science and basics of AQ forecasting
                </Text>
                <Text className="mt-2">
                  • Air quality forecasting using local, regional, and global
                  models
                </Text>
                <Text className="mt-2">
                  • Model components such as emissions, boundary conditions,
                  initialization, and data assimilation
                </Text>
                <Text className="mt-2">
                  • Hands-on exercise developing a simple forecasting model
                </Text>
                <Text className="mt-2">
                  • Download, map, and subset GEOS outputs using tools developed
                  by the Goddard Earth Sciences Data and Information Services
                  Center (GES DISC)
                </Text>
                <Text className="mt-2">
                  • Perform intercomparison and evaluation of analysis and
                  forecast output using Jupyter notebooks
                </Text>
                <Text className="mt-2">
                  • Perform air quality assessment using reanalysis and
                  forecasts from GEOS, ground and satellite measurements
                </Text>
              </View>
            </View>
          ) : objtitle == "Disaster" ? (
            <View>
              <Text>
                SAR sensors are Ideal for monitoring certain disasters or areas
                that are vulnerable to disasters especially because the signal
                can “see” the surface of the Earth during day or night
                conditions and under nearly all weather conditions. In addition,
                the signal can penetrate through vegetation and is sensitive to
                surface roughness and small displacements of the land surface.
                This intermediate, three-part webinar series will focus on the
                use of SAR to 1) assess areas at risk from disasters due to
                landslides through the use of Interferometric SAR (INSAR). This
                is accomplished by measuring small movements (on the order of
                centimeters) of the land surface that are caused by gradual
                landslide motion, and how these movements vary with time; 2)
                characterize the extent of oil spills and their impacts. SAR
                data Is sensitive to surface roughness, allowing for identifying
                areas where there are oil spills; 3) and characterizing
                inundation extent. The SAR signal can penetrate through the
                vegetation and detect inundation driven by large precipitation
                events or by natural events. This training will include
                theoretical portions for each disaster as related to the SAR
                signal interaction with surface conditions and demonstrations
                using Google Earth Engine, Jupyter Notebooks, and the SNAP
                Toolbox, all freely and openly available tools.
              </Text>
            </View>
          ) : (
            ""
          )}
        </ScrollView>
      </View>
    </Modal>
  );
}

---
description: Instructions for generating an analysis plan for a specific screen based on the design and Business Requirement Documentation (BRD).
---

# **Screen Analysis and Implementation Guide**

## **Screen**

- **Figma file URL**:
  - [Login Screen](https://www.figma.com/design/F23j9sY9zL1vMbL3TfWkRE/MBF_B%E1%BA%A3n-%C4%91%E1%BB%93-d%E1%BB%AF-li%E1%BB%87u_N%E1%BB%99i-b%E1%BB%99?node-id=1-21039&t=ElBnZlnfjgtvDBrU-4)
  - [Verify OTP Screen](https://www.figma.com/design/F23j9sY9zL1vMbL3TfWkRE/MBF_B%E1%BA%A3n-%C4%91%E1%BB%93-d%E1%BB%AF-li%E1%BB%87u_N%E1%BB%99i-b%E1%BB%99?node-id=124-7442&t=QbJL4cXPsK9tGLwU-4)

## **Tools**

- **`figma-mcp`:** Retrieve design information and download assets.

## **Documentation**

- **Business Requirement Documentation (BRD)**: Located in '`docs/brd/login.md`'.
- **Planning Rules**: Located in `.cursor/rules/planning.mdc`.
- **Implementation Rules**: Located in `.cursor/rules/implementation.mdc`.

## **Tasks**

### Task 1. Extract Design Data

- Base the Figma file url, analyze design in the Figma get the node data by node id and save it in the `figma-data/login` (absolute path to this folder). Name is `login-node-data.json`.

- `login-node-data.json` is a huge file, so break it into multiple smaller files, each file contains the nodes of a section of the screen. Place each section file in `figma-data/login/sections` folder. Use an index file to link all of these sections.

- Each section file should contain its nodes, keyFile, and a short description of the screen.

- Download Figma assets if needed.

### Task 2. Planning

- Base the **Design Data** and **Business Requirement Documentation**, thinking carefully and generate a good plan to implement the screen, step by step. Put your plan in the `docs/planning/login-plan.md` file.

- You can suggest some best practices and strategies to implement the screen. Please provide the reasoning of your choices. Follow **Planning Rules**.

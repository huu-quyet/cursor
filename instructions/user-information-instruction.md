---
description: Instructions for generating an analysis plan for a specific screen based on the design and Business Requirement Documentation (BRD).
---

# **Screen Analysis and Implementation Guide**

## **Screen**

- **Figma file URL**:
  - [User Information Screen](https://www.figma.com/design/F23j9sY9zL1vMbL3TfWkRE/MBF_B%E1%BA%A3n-%C4%91%E1%BB%93-d%E1%BB%AF-li%E1%BB%87u_N%E1%BB%99i-b%E1%BB%99?node-id=1-20508&t=z25M45i6IxAii13n-4)

## **Tools**

- **`figma-mcp`:** Retrieve design information and download assets.

## **Documentation**

- **Business Requirement Documentation (BRD)**: Located in '`docs/brd/user-information.md`'.
- **Planning Rules**: Located in `.cursor/rules/planning.mdc`.
- **Implementation Rules**: Located in `.cursor/rules/implementation.mdc`.

## **Instructions**

### Extract Design Data

- Base the Figma file url, analyze design in the Figma get the node data by node id and save it in the `figma-data/user-information` (absolute path to this folder). Name is `user-information-node-data.json`.

- `user-information-node-data.json` is a huge file, so break it into multiple smaller files, each file contains the nodes of a section of the screen. Place each section file in `figma-data/user-information/sections` folder. Use an index file to link all of these sections.

- Each section file should contain its nodes, keyFile, and a short description of the screen.

- Download Figma assets if needed (localPath: 'C:/Users/huu_quyet/Desktop/demo/my-app/src/assets').

### Planning

- Base the **Design Data** and **Business Requirement Documentation**, thinking carefully and generate a good plan to implement the screen, step by step. Put your plan in the `docs/planning/user-information-plan.md` file.

- You can suggest some best practices and strategies to implement the screen. Please provide the reasoning of your choices. Follow the **Planning Rules** .

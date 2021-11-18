// enum ComponentType {
//   TEXT
//   IMAGE
//   CUSTOM
// }

// model Component {
//   id            Int           @id @default(autoincrement())
//   componentType ComponentType
//   Section       Section?      @relation(fields: [sectionId], references: [id])
//   sectionId     Int?
// }

// model Section {
//   id         Int         @id @default(autoincrement())
//   name       String
//   Components Component[]
// }

interface IComponent {
  componentType: 'custom' | 'text' | 'image';
  id: number;
  sectionId: number;
  parentId: number;
  reactComponent: string;
}

interface IComponentStructure {
  componentId: number;
  childrenIds: this[];
}

interface ISection {
  id: number;
  name: string;
  components: IComponent[];
  componentStructure: IComponentStructure[];
}

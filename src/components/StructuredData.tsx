import {
  serializeStructuredData,
  type StructuredDataValue
} from "@/lib/structuredData";

type StructuredDataProps = {
  data: StructuredDataValue;
};

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeStructuredData(data) }}
    />
  );
}

import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Img,
  Link,
  Section,
  Row,
  Column,
} from "@react-email/components";

interface VisaApprovalEmailProps {
  name: string;
  passportNumber: string;
  visaType: string;
  country: string;
  date: string;
}

export default function VisaApprovalEmail({
  name,
  passportNumber,
  visaType,
  country,
  date,
}: VisaApprovalEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ margin: 0, padding: 0, backgroundColor: "#f4f4f4" }}>
        {/* Full-width container */}
        <Container
          style={{
            width: "100%",
            maxWidth: "600px", // Set a max-width for better readability
            margin: "0 auto",
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {/* Header with Logo and Address */}
          <Section style={{ width: "100%" }}>
            <Row>
              <Column style={{ width: "50%", verticalAlign: "top" }}>
                <Link href="https://www.legalpathwayimmigrationlawfirm.org">
                  <Img
                    src="https://res.cloudinary.com/dywd8r6rd/image/upload/v1741782026/logo3_ewikx4.png"
                    alt="Legal Pathway Immigration"
                    width="150"
                    style={{ display: "block" }}
                  />
                </Link>
              </Column>
              <Column
                style={{
                  width: "50%",
                  textAlign: "right",
                  verticalAlign: "top",
                }}
              >
                <Text style={{ margin: 0 }}>
                  <Link
                    href="https://www.google.com/maps/search/?api=1&query=3250+Bloor+St+W+Suite+600,+Toronto,+ON+M8X+2X9,+Canada"
                    style={{ textDecoration: "none" }}
                  >
                    3250 Bloor St W Suite 600, Etobicoke, ON M9X 2Y4, Canada
                  </Link>
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Eligibility Check Title */}
          <Text
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              // textAlign: "center",
              margin: "20px 0",
            }}
          >
            ELIGIBILITY CHECK
          </Text>

          {/* Visa Approval Details */}
          <Section>
            <Text style={{ margin: "10px 0" }}>
              <strong>NAME:</strong> {name}
            </Text>
            <Text style={{ margin: "10px 0" }}>
              <strong>PASSPORT NUMBER:</strong> {passportNumber}
            </Text>
            <Text style={{ margin: "10px 0" }}>
              <strong>VISA APPLICATION:</strong> {visaType}
            </Text>
            <Text style={{ margin: "10px 0" }}>
              <strong>COUNTRY:</strong> {country}
            </Text>
            <Text style={{ margin: "10px 0" }}>
              <strong>DATE:</strong> {date}
            </Text>
          </Section>

          {/* Verification Successful */}
          <Text
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              margin: "20px 0 10px 0",
            }}
          >
            VERIFICATION SUCCESSFUL
          </Text>

          <Text style={{ margin: "10px 0" }}>Dear {name},</Text>
          <Text style={{ margin: "10px 0" }}>
            We are pleased to inform you that subject to the fulfillment of all
            Immigration procedures under relevant laws in Canada and the Labour
            Act of 1986, your documents have been completely verified.
          </Text>
          <Text style={{ margin: "10px 0" }}>
            Your submitted documents have been thoroughly checked. You meet
            requirements for {visaType} Application.
          </Text>
          <Text style={{ margin: "10px 0" }}>
            You have been found eligible to apply for your {visaType}{" "}
            APPLICATION PROCESS.
          </Text>
          <Text style={{ margin: "10px 0" }}>
            This is to certify that these documents with the above name are
            APPROVED, AUTHORIZED and required to make a payment for {visaType}.
          </Text>
          <Text style={{ margin: "10px 0" }}>
            However, applicant(s) are required to make a deposit payment of a
            REFUNDABLE REGISTRATION FEE through your consultant.
          </Text>

          {/* Next Steps */}
          <Text
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              margin: "20px 0 10px 0",
            }}
          >
            Here&apos;s the next stage to get started:
          </Text>
          <ul style={{ margin: "10px 0", paddingLeft: "20px" }}>
            <li>Registration Fees Payment*</li>
            <li>
              Payment of required fees to initiate the registration process.
            </li>
            <li>
              Fees cover administrative costs, application processing, and
              consultation services.
            </li>
            <li>Application Initiation</li>
            <li>Completion and submission of application forms.</li>
            <li>Upload of supporting documents</li>
            <li>Official start of the immigration process.</li>
          </ul>

          {/* Note */}
          <Text style={{ fontSize: "14px", color: "gray", margin: "20px 0" }}>
            NOTE: Applicant(s) are expected to effect a response of their
            ELIGIBILITY RESULTS within 72 working hours, else eligibility will
            be expired. Once your application process is initiated at the
            embassy, you can expect to receive regular updates and
            correspondence directly from the agency, your designated consultant,
            and the embassy itself.
          </Text>
          <Text style={{ fontSize: "14px", color: "gray", margin: "20px 0" }}>
            If you have any questions or concerns, please do not hesitate to
            consult your consultant or customer service through the official
            mail address.
          </Text>
          <Text style={{ fontSize: "14px", color: "gray", margin: "20px 0" }}>
            We appreciate your trust in LEGAL PATHWAY IMMIGRATION LAW FIRM and
            look forward to supporting your Canadian journey!
          </Text>

          {/* Footer with Logos */}
          <Section align="center" style={{ width: "100%", marginTop: "20px" }}>
            <Row>
              <Column style={{ width: "33%", textAlign: "center" }}>
                <Link href="https://www.legalpathwayimmigrationlawfirm.org">
                  <Img
                    src="https://res.cloudinary.com/dywd8r6rd/image/upload/v1741783451/canada1_en3amo.png"
                    alt="Canada Immigration"
                    width="150"
                    style={{ display: "block", margin: "0 auto" }}
                  />
                </Link>
              </Column>
              <Column style={{ width: "33%", textAlign: "center" }}>
                <Link href="https://www.legalpathwayimmigrationlawfirm.org">
                  <Img
                    src="https://res.cloudinary.com/dywd8r6rd/image/upload/v1741783487/canada2_tigjgl.png"
                    alt="Canada Immigration"
                    width="150"
                    style={{ display: "block", margin: "0 auto" }}
                  />
                </Link>
              </Column>
              <Column style={{ width: "33%", textAlign: "center" }}>
                <Link href="https://www.legalpathwayimmigrationlawfirm.org">
                  <Img
                    src="https://res.cloudinary.com/dywd8r6rd/image/upload/v1741783487/canada2_tigjgl.png"
                    alt="Canada Immigration"
                    width="150"
                    style={{ display: "block", margin: "0 auto" }}
                  />
                </Link>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

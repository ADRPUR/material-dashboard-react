export class Ticket {
    constructor(
      status,
      type,
      msisdn,
      customerNo,
      lineNo,
      custSegment,
      customerType,
      insertDate,
      closeDate,
      openby,
      closeby,
      groupId,
      skillId,
      lockedBy,
      ad1,
      ad2,
      ad3,
      sunId,
      contactNr
    ) {
      this.status = status;
      this.type = type;
      this.msisdn = msisdn;
      this.customerNo = customerNo;
      this.lineNo = lineNo;
      this.custSegment = custSegment;
      this.customerType = customerType;
      this.insertDate = insertDate;
      this.closeDate = closeDate;
      this.openby = openby;
      this.closeby = closeby;
      this.groupId = groupId;
      this.skillId = skillId;
      this.lockedBy = lockedBy;
      this.ad1 = ad1;
      this.ad2 = ad2;
      this.ad3 = ad3;
      this.sunId = sunId;
      this.contactNr = contactNr;
    }
  }
  
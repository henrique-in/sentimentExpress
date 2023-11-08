export interface SentimentAPI {
  agreement: string;
  confidence: string;
  irony: string;
  model: string;
  score_tag: string;
  sentence_list: SentenceList[];
  sentimented_concept_list: SentimentedConceptList3[];
  sentimented_entity_list: SentimentedEntityList3[];
  status: Status;
  subjectivity: string;
}

export interface SentenceList {
  agreement: string;
  bop: string;
  confidence: string;
  endp: string;
  inip: string;
  score_tag: string;
  segment_list: SegmentList[];
  sentimented_concept_list: SentimentedConceptList2[];
  sentimented_entity_list: SentimentedEntityList2[];
  text: string;
}

export interface SegmentList {
  agreement: string;
  confidence: string;
  endp: string;
  inip: string;
  polarity_term_list: PolarityTermList[];
  score_tag: string;
  segment_list: SegmentList2[];
  segment_type: string;
  text: string;
}

export interface PolarityTermList {
  confidence: string;
  endp: string;
  inip: string;
  score_tag: string;
  sentimented_concept_list: SentimentedConceptList[];
  sentimented_entity_list: SentimentedEntityList[];
  text: string;
}

export interface SentimentedConceptList {
  endp: string;
  form: string;
  id: string;
  inip: string;
  score_tag: string;
  type: string;
  variant: string;
}

export interface SentimentedEntityList {
  endp: string;
  form: string;
  id: string;
  inip: string;
  score_tag: string;
  type: string;
  variant: string;
}

export interface SegmentList2 {
  agreement: string;
  confidence: string;
  endp: string;
  inip: string;
  polarity_term_list: PolarityTermList2[];
  score_tag: string;
  segment_type: string;
  text: string;
}

export interface PolarityTermList2 {
  confidence: string;
  endp: string;
  inip: string;
  score_tag: string;
  text: string;
}

export interface SentimentedConceptList2 {
  form: string;
  id: string;
  score_tag: string;
  type: string;
}

export interface SentimentedEntityList2 {
  form: string;
  id: string;
  score_tag: string;
  type: string;
}

export interface SentimentedConceptList3 {
  form: string;
  id: string;
  score_tag: string;
  type: string;
}

export interface SentimentedEntityList3 {
  form: string;
  id: string;
  score_tag: string;
  type: string;
}

export interface Status {
  code: string;
  msg: string;
  credits: string;
  remaining_credits: string;
}

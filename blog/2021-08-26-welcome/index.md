---
slug: ai-for-sdk-generation
title: Can AI help with SDK Generation?
authors: [cameron]
tags: [sdk, ai]
---

At <a href="">liblab</a>, our exploration into leveraging AI, specifically Large Language Models (LLMs), to see if it can be used to contribute to the <a href="">generation of Software Development Kits (SDKs)</a> has been both enlightening and challenging. This exploration aimed to enhance our internal development processes and maintain a competitive edge in the rapidly evolving tech landscape. Despite the hurdles, our experiences have provided valuable insights into the potential and limitations of current AI technologies in software development.

## The experiment

Our exploration began with the goal of generating SDKs from OpenAPI specifications. This process involves several stages:

- Generating OpenAPI specs from documentation
- Creating SDK components such as models and services
- Integrating <a href="">custom hooks</a> based on prompts.

Our experiments helped us better evaluate the potential in the space.

## Achievements

We managed to partially generate SDK components, demonstrating the potential of AI in streamlining certain aspects of development. This achievement is a testament to the capabilities of AI to assist in automating repetitive and straightforward tasks within the SDK generation process.

This may sound great, but the downsides far outweigh the benefits.

## Limitations

Despite the achievements, the integration of these components into a cohesive SDK proved to be overly time-consuming and highlighted significant limitations:

### 1. Non-determinism and hallucinations

> In the context of LLMs, “hallucination” refers to a phenomenon where the model generates text that is incorrect, nonsensical, or not real.

> <a href="">A Gentle Introduction to Hallucinations in Large Language Models</a>

LLMs showed a tendency to produce variable outputs and factual inaccuracies. This inconsistency poses challenges in achieving reliability, especially since SDKs generated in different sessions may not be compatible due to hallucinated content or changes in the SDK's public surface area after adding new endpoints.

In some cases, the LLM would entirely disregard the given specification or make incorrect assumptions about specific endpoints, resulting in non-functional code.

### 2. Input and output limitations

The models faced difficulties with the volume of code that could be processed and generated in a single instance, hampering their ability to handle complete codebases. LLMs use tokens, with a token approximately equivalent to a couple of characters, and different LLM models have different token limits, for example the largest GPT-4 model can take 128,000 tokens as input, and return only 4,000 tokens as output, which is too small for an SDK.

Over time this will reduce as LLMs have larger token limits, but for now, it's a significant limitation.

### 3. Response time and cost implications

The increased response time and associated costs of utilizing LLMs for development tasks were non-negligible, impacting efficiency. For instance, a single call to the OpenAI API can take upwards of 15 seconds, with multiple calls needed. liblab can generate multiple SDKs in approximately 10 seconds.

### 4. State and memory constraints

LLMs demonstrated limitations in maintaining conversational memory and managing state, complicating extended code generation sequences. This is related to the input and output limitations, but also the fact that LLMs are not designed to be used in a conversational manner.

Memory can be implemented by passing all the previous inputs and outputs into the model, but this is not practical for SDK generation as this drastically increases the number of tokens used, the response time, and cost. Other solutions are possible, such as using vector databases, but these add complexity and cost.

### 5. Security concerns

A significant limitation that cannot be overlooked when considering AI-generated SDKs is the potential for increased security risks. As AI models, including LLMs, are trained on vast datasets of existing code, they inherently lack the ability to discern secure coding practices from insecure ones. This can lead to the generation of code that is vulnerable to common security threats and weaknesses.

For more information on this topic refer to <a href="">The Snyk 2023 AI Code Security Report</a>.

## Insights into AI's application in SDK generation

Our journey has underscored the importance of clarity, precision, and simplification in interactions with LLMs. We learned the value of structuring prompts and managing code outputs effectively to optimize the model's performance. However, our experiments also highlight the current impracticality of relying on AI for SDK generation due to the critical issue of non-determinism and hallucinations.

## The verdict on AI-generated SDKs

Given the challenges in achieving the necessary level of accuracy, consistency, and functionality, the current state of AI technology does not offer a viable alternative to traditional SDK generation methods. Our findings suggest a need to approach AI with caution in this context, emphasizing the irreplaceable value of human expertise and tailored solutions.

## The role of AI in enhancing developer experience at liblab

We are committed to providing developers with tools that are not only powerful but also user-friendly and easy to integrate. Our exploration has reinforced our belief in leveraging AI where it adds value without compromising on quality or usability, ensuring that we prioritize human-centered design in our tool development.

### Future directions

Informed by our experiences, we remain optimistic about the potential of AI to enhance our offerings in ways that do not involve direct SDK generation. We are exploring other avenues where AI can positively impact the developer experience, focusing on areas that complement our strengths and meet our customers' needs.

## Conclusion

The journey of leveraging AI at liblab has been a path of discovery, filled with both challenges and opportunities. While AI-generated SDKs cannot not replace <a href="">traditional methods</a>, the potential of AI to transform development practices remains undeniable.

We look forward to continuing our exploration of AI technologies, constantly seeking ways to innovate and improve the tools we offer to the developer community.

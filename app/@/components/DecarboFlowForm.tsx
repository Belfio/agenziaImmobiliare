import * as React from "react";
import { cn } from "~/@/lib/utils";
import { Label } from "./ui/label";
import { Form, useFetcher, useNavigate } from "@remix-run/react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Slider } from "./ui/slider";

// Import the decarboModel from the appropriate file
import { decarboModel, OptionType } from "~/@/lib/decarboModel";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function DecarboFlowForm({
  className,
  questionId,
}: {
  className?: string;
  questionId: string;
}) {
  const [responses, setResponses] = React.useState({});
  const navigate = useNavigate();
  const fetcher = useFetcher();

  const currentQuestion =
    decarboModel.find((q) => q.id === questionId) || decarboModel[0];

  const handleResponse = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = event.currentTarget;
    console.log("cazzooo", value);
    setResponses({
      ...responses,
      [currentQuestion.id]: value,
    });
    if (questionId !== "submit") {
      const nextQuestionId =
        currentQuestion.options.find((o: OptionType) => o.value === value)
          ?.target || "submit";
      navigate(`/dashboard/decarbonization/${nextQuestionId}`);
    }
    if (questionId === "submit") {
      console.log(responses);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // setIsLoading(true);
    // Process the responses here
    console.log(responses);
    setTimeout(() => {
      //   setIsLoading(false);
    }, 3000);
  };

  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case "radio":
        return (
          <fetcher.Form onSubmit={(e) => handleResponse(e)}>
            <RadioGroup>
              {currentQuestion.options.map((option: OptionType) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value}>{option.title}</Label>
                </div>
              ))}
            </RadioGroup>
            <Button type="submit">Continue</Button>
          </fetcher.Form>
        );
      case "radio_range":
        return (
          <>
            <fetcher.Form>
              <RadioGroup>
                {currentQuestion.options.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value}>{option.title}</Label>
                    <Slider
                      defaultValue={[1]}
                      max={7}
                      step={1}
                      className="mt-4"
                      onValueChange={(value) => console.log(value)}
                      name="slider"
                    />
                    <Button type="submit">Continue</Button>
                  </div>
                ))}
              </RadioGroup>
              <Button type="submit">Continue</Button>
            </fetcher.Form>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className={cn("grid gap-6 mt-8", className)}>
        <Card className={` ${className}`}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {currentQuestion.title}
            </CardTitle>
          </CardHeader>
          <CardContent>{renderQuestion()}</CardContent>
        </Card>
      </div>
    </Form>
  );
}

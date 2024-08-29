import * as React from "react";
import { cn } from "~/@/lib/utils";
import { Label } from "./ui/label";
import { Form, useNavigate } from "@remix-run/react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Slider } from "./ui/slider";
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
  const [responses, setResponses] = React.useState<Record<string, string>>({});
  const navigate = useNavigate();

  const currentQuestion =
    decarboModel.find((q) => q.id === questionId) || decarboModel[0];

  const handleResponse = (value: string | number) => {
    setResponses((prev) => ({ ...prev, [currentQuestion.id]: String(value) }));

    if (questionId !== "submit") {
      const nextQuestionId =
        currentQuestion.options.find((o: OptionType) => o.value === value)
          ?.target || "submit";
      navigate(`/dashboard/decarbonization/${nextQuestionId}`);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(responses);
    navigate("/dashboard/decarbonization/");
    // Process the responses here
  };

  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case "radio":
        return (
          <RadioGroup className="my-4" onValueChange={handleResponse}>
            {currentQuestion.options.map((option: OptionType) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value}>{option.title}</Label>
              </div>
            ))}
          </RadioGroup>
        );
      case "radio_range":
        return (
          <RadioGroup className="space-y-4" onValueChange={handleResponse}>
            {currentQuestion.options.map((option) => (
              <div key={option.value} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value}>{option.title}</Label>
                </div>
                <Slider
                  defaultValue={[option.range?.min || 0]}
                  max={option.range?.max}
                  step={option.range?.step}
                  className="mt-2"
                  onValueChange={(value) =>
                    handleResponse(`${option.value}:${value[0]}`)
                  }
                />
                <div className="flex justify-between text-xs">
                  {option.range?.labels ? (
                    option.range.labels.map((label, index) => (
                      <span key={index}>{label}</span>
                    ))
                  ) : (
                    <>
                      <span>{option.range?.min}</span>
                      <span>
                        {option.range?.max} {option.range?.unit}
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </RadioGroup>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex m-8 h-fit w-full">
      <Form onSubmit={handleSubmit}>
        <Card className={`${className} w-[400px]`}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {currentQuestion.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {renderQuestion()}
            <Button type="submit" className="mt-4">
              {questionId === "submit" ? "Submit" : "Continue"}
            </Button>
          </CardContent>
        </Card>
      </Form>
      <div className="w-[400px] items-center flex ml-8">
        {JSON.stringify(responses, null, 2)}
      </div>
    </div>
  );
}
